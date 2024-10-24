interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {};

const Textarea: React.FC<TextAreaProps> = (props) => {
    return(
        <textarea name="" id="" {...props}></textarea>
    )
}

export default Textarea;
