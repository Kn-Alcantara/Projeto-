import "./index.scss";
import user from '../../assets/img/user.svg'
import star from '../../assets/img/star.svg'

const Grades= () => {
  return (
    <div id="container">
      <div class="classificacao">

        <div id="container-usuario">
          <div class="user-usuario">
            <img src={user} />
            <span>Brunella</span>
          </div>
          <div className="comentario-usuario">
          "Muito boa série, adorei... acredito que você também vai gostar bastante”
          </div>
        </div>

          <div class="nota">
            <span className="texto-nota">Nota</span>
            <span className="numero-nota"><img src={star}/>5</span>
          </div>

      </div>
    </div>
  );
}

export { Grades };