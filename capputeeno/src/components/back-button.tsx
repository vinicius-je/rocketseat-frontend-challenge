import { BackIcon } from "@/icons/back-icon";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content:  center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;

    font-weigth: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secondary-text)
`

interface BtnProps{
    navigate: string;
}

export function BackBtn({navigate}: BtnProps){
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <Button onClick={handleNavigate}>
            <BackIcon/>
            voltar
        </Button>
    )
}