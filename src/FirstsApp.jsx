import PropTypes from 'prop-types';

export function App(){
    return (<h1>Hola Mundo!!!</h1>)
}


export const FirstsApp = ({title, subTitle}) => {
  return (
    <> 
        <h1>{title}</h1>
        <p>Soy un subtitulo</p>
    </>
  )
}

FirstsApp.propTypes = {
    title: PropTypes.string.isRequired,
}

FirstsApp.defaultProps = {
    subTitle: 'Soy un subtitulo',
};