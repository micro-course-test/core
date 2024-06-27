"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { createCourseAction } from "../actions"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const createCousreFormShema = z.object({
    name: z.string(),
    description: z.string(),
})

export function CreateCourseForm({
        className,
        revalidatePagePath
    }:
    {
        className: string,
        revalidatePagePath: string
    }) {
    const [isCreateTransition, startCreateTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(createCousreFormShema),
        defaultValues: {
        name: "",
        description: "",
        },
    })

    return (
        <Form {...form}>
            <form
                    onSubmit={form.handleSubmit((data) => {
                        startCreateTransition(async () => {
                            createCourseAction(revalidatePagePath, data)
                        })
                    })}
                    className={cn(className, "space-y-8")}
                >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Название</FormLabel>
                        <FormControl>
                            <Input placeholder="Название..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Описание</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Описание..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isCreateTransition}>Добавить</Button>
            </form>
        </Form>
    )
}
