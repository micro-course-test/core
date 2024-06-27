import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
import { cn } from "@/lib/utils";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Курсы</h1>
      <h2>Подзаголовок</h2>
      <CreateCourseForm
        className="w-[300px] mb-10"
        revalidatePagePath="/"
        />
      <CoursesList revalidatePagePath="/"/>
    </main>
  );
}
