export default function AuthLayout({
    children
}:{
    children: React.ReactNode
}) {
    return(
        <div className="items-center flex justify-center pt-[5%]">
            {children}
        </div>
    )
}