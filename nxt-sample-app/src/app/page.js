import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p>Start your development server </p>
      <p>styling Uses Tailwind CSS classes for spacing, typography, and alignment </p>
      <p>A basic layout with a title and a link to the Next.js documentation.
        The styling uses Tailwind CSS utility classes to center the content and style the text and button. </p>
      <Card style={{background:'skyblue', width:'7rem', padding:'0.5rem', marginBottom:'2'}}>
        <CardHeader>
          <CardTitle>Card user1</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>

    </>
  )
}
