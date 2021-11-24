import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';


import styles from './style.module.scss';



export function LoginBox() {
    const { signInUrl } = useContext(AuthContext);


    return (
        <div className={styles.LoginBoxWrapper}>
            <strong>Entre e compartilhe sua menssagem</strong>
            <a href={signInUrl} className={styles.signInWhithGitHub}>
                <VscGithubInverted size="24" />
                Entrar com GitHub
            </a>
        </div>
    )
}