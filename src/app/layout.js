export const metadata = {
    title: 'Rohit Jha',
    description: 'Personal website of Rohit Jha',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}