import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Second() {
    return <>
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3>Upload receipt</h3>
            <p>Basically  will be displaying content about uplaoding receipts</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>My accordion?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Button className="bg-pink-900" style={{marginTop:'2rem', width:'6rem'}}>Chad button</Button>
        </div>
    </>
}