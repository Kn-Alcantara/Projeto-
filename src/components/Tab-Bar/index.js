import './index.scss';
import home from '../../assets/img/home.png';
import research from '../../assets/img/research.png';
import downloads from '../../assets/img/downloads.png';
import more from '../../assets/img/more.png';
import breve from '../../assets/img/breve.png';

const TabBar = () => {
  
  return (
    <div id="container-tab">
      <div id="tab-menu">
        <div className="tab-item">
          <a href="#"><img src={home} alt="Início" /></a>
          <span class="desativado">Início</span>   
        </div>
        <div className="tab-item">
          <a href="#"><img src={research} alt="Buscar"/></a>
          <span class="desativado">Buscar</span>
        </div>
        <div className="tab-item">
          <a href="#"><img src={breve} alt="Em breve" /></a>
          <span class="desativado">Em breve</span>       
        </div>
        <div className="tab-item">
          <a href="#"><img src={downloads} alt="Downloads" /></a>
          <span class="desativado">Downloads</span> 
        </div>
        <div className="tab-item">
          <a href="#"> <img src={more} alt="Mais" /></a>
          <span class="desativado">Mais</span> 
        </div>
      </div>
    </div>
  );
}

export{ TabBar };