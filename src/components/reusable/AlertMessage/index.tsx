const AlertMessage = (props: any) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10rem',
            color: 'var(--darker-gray)'
        }}>
            <p className="xlarge-font bold">
                {props.message}
            </p>
        </div>
    );
}

export default AlertMessage;