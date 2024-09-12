import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function First() {
    return <>
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3>Purchase order</h3>
            <p>Here is all about purchase order made which mean you need to approve them.</p>
            <ul className="max-w-2xl mt-6 list-disc list-inside text-left">
                <li className="mb-2">Lorem ipsum dolor sit amet</li>
                <li className="mb-2">Consectetur adipiscing elit</li>
                <li className="mb-2">Sed do eiusmod tempor incididunt</li>
                <li className="mb-2">Ut labore et dolore magna aliqua</li>
                <li className="mb-2">Excepteur sint occaecat cupidatat non proident</li>
            </ul>
            <Table  style={{paddingBottom:'2rem'}}>
                <TableCaption>Recent purchase order.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]"  style={{paddingRight:'2rem'}}>Invoice</TableHead>
                        <TableHead style={{paddingRight:'4rem'}}>Status</TableHead>
                        <TableHead style={{paddingRight:'4rem'}}>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV002</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV003</TableCell>
                        <TableCell>Approved</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    </>
}