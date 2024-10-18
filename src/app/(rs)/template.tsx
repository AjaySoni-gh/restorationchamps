export default function RSlayout({
    children,
}:{
    children: React.ReactNode
}
){
    return (
        <div className="animate-appear">
          
                {children}
          
        </div>
    )
}