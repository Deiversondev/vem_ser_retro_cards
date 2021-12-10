import { useFormik} from 'formik'
import axios from 'axios'


function CreateItems() {
    const formik = useFormik({
        initialValues:{
            tipo:'',
            titulo:'',
            descricao:''
        }, onSubmit:async (values) =>{
        //    const {data} =  await axios.post('https://my-application-teste.herokuapp.com/auth',values)
            console.log(values)
            // console.log(data)

            formik.resetForm()
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                
               

                <div >
                    <label htmlFor="tipo">Tipo</label>
                 
                    <select  onChange={formik.handleChange} value={formik.values.tipo} name="tipo" id="tipo">

                      <option value='' >Selecione uma opção</option>
                      <option value='O que funcionou bem' >O que funcionou bem?</option>
                      <option value='O que pode ser melhorado  '>O que pode ser melhorado ?</option>
                      <option value='O que faremos no próximo sprint para melhorar'>    No próximo sprint,poderiamos...</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" id="titulo" placeholder="Digite seu username" onChange={formik.handleChange} value={formik.values.titulo} />
                </div>

                <div >
                    <label htmlFor="descricao">Descrição</label>
                    <textarea  name="descricao" id="descricao" placeholder="descricao" onChange={formik.handleChange} value={formik.values.descricao} cols="30" rows="10"></textarea>
                </div>

                <div>
                    <button type="submit">Salvar</button>
                </div>

            </form>
        </div>
    )
}

export default CreateItems
