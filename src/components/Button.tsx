const Button = ({ label, onClick }: ButtonProps) => (
    <button onClick={onClick}>{label}</button>
);

export default Button;

interface ButtonProps {
    label: string;
    onClick: () => void;
}
