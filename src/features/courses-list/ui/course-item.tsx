'use client'

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useTransition } from 'react';

export function CourseItem({course, onDelete}: {
    course: CourseListElement;
    onDelete: () => Promise<void>;
}) {

    const [isLoadindDelete, startDeleteTransition] = useTransition();

    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete();
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button disabled={isLoadindDelete} onClick={handleDelete}>Удалить</Button>
            </CardFooter>
        </Card>
    )
}
