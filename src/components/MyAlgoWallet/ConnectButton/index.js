import { Button } from "../../Button.styles";

const ConnectButton = ({connectWallet}) => {
    return(
        <Button onClick ={connectWallet}>
           Connect MyAlgo Wallet
        </Button>
    )
}

export default ConnectButton