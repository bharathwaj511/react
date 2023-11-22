function Display()
{
    return(
        <div>
            <h1>Nested Components</h1>
        </div>
    )
}

export default function NestedComponent()
{
    return (
        <div>
            <Display />
        </div>
    )
}