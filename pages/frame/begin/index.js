export default function Frame2(props) {
    console.log(props)
    const { toggleTrigger } = props;
    if (toggleTrigger === 'block') {
        console.log('i am supe')
    } else {
        console.log('i hide ')
    }
    return(
        <div>
            <h1>Hello world!</h1>
        </div>
    )
}