type MyBottonProps = {
    title: string;
    onClick: () => void;
}

function MyBuutton(props: MyBottonProps){
    return(
        <button onClick={props.onClick}>
            {props.title}
        </button>
    );
}

export default MyBuutton;