import { useFormik} from 'formik';
import api from '../api';


function Login() {


    const handleLogin = async (values) => {
        const {data} =  await api.post('/auth',values)
        localStorage.setItem('token',data)
        api.defaults.headers.common['Authorization'] = data;
        console.log(data)
    }

    const formik = useFormik({
        initialValues:{
            usuario:'',
            senha:''
        }, onSubmit:async (values) =>{
           handleLogin(values)
            console.log(values)
          

            formik.resetForm()
        }
    })

    return (
        <div>

<h1>Login</h1>

            <form onSubmit={formik.handleSubmit}>
                
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" name="usuario" id="usuario" placeholder="Digite seu username" onChange={formik.handleChange} value={formik.values.usuario} />
                </div>

                <div >
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={formik.handleChange} value={formik.values.senha} />
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    )
}

export default Login