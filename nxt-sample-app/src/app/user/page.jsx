import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function User() {
    return(
        <>
         <h1 className="bg-red-500">Manage users</h1>
         <p>Handle all users in your org.</p>
         <ul>
            <li>Add</li>
            <li>Delete</li>
            <li>Update/ modify</li>
            <li>Suspend</li>
        </ul>
        <h4>here is user list:</h4>
        <div style={{display:'flex', gap:'1rem'}}>
            <Card style={{ background: 'skyblue', width: '7rem', padding: '0.5rem', marginBottom: '2rem' }}>
                <CardHeader>
                    <CardTitle>Card user1</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>
            <Card style={{ background: 'skyblue', width: '7rem', padding: '0.5rem', marginBottom: '2rem' }}>
                <CardHeader>
                    <CardTitle>Card user1</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}