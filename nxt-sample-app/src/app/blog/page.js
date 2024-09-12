import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Blog() {
    return <>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <h1>Welcome to your dashboard!</h1>
            <p> we are going to give this dashboard it's own layout</p>
            <div>
                <h3>Login form</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Input style={{ paddingTop: '6px', paddingBottom: '6px' }} type="names" placeholder="Names" />
                    <Input style={{ paddingTop: '6px', paddingBottom: '6px' }} type="email" placeholder="Email" />
                    <Input style={{ paddingTop: '6px', paddingBottom: '6px' }} type="password" placeholder="Password" />
                    <Button style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', width: '4rem' }} >Signin</Button>
                </div>
            </div>

            <p>Here is what we need to do after loging in:</p>
            <ol>
                <li>create a dashboard forder</li>
                <li>add page.js file</li>
                <li>add layout.js file</li>
            </ol>
        </div>
    </>

}