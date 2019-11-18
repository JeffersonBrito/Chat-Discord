import React, { Component } from "react";

import node_logo from "../../assets/node.svg";
import react_logo from "../../assets/react.png";

import monitor from "../../assets/monitor.png";
import notbook from "../../assets/notbook.svg";
import controle from "../../assets/controle.svg";
import iphone from "../../assets/iphone.svg";
import android from "../../assets/android.svg";
import potion from "../../assets/mana-potion.svg";
import disco from "../../assets/disco.svg";
import fone from "../../assets/fone.svg";
import chip from "../../assets/chip.svg";
import caixa_mario from "../../assets/caixa-mario.svg";
import bomb from "../../assets/bomb.svg";
import coin from "../../assets/coin.svg";
import logo_footer from "../../assets/logo_footer.svg";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <div className="container-1">
          <div className="box-1">
            <h2>É hora de largar o Skype e o TeamSpeak.</h2>
            <p>
              Um bate-papo de voz e texto para jogadores que é gratuito, seguro
              e que funciona tanto no celular quanto no computador. Pare de
              pagar por servidores TeamSpeak e de brigar com o Skype. Facilite
              sua vida.
            </p>
            <ul>
              <li>
                <a id="download-discord" href="#">
                  Baixe o Discord
                </a>
              </li>
              <li>
                <a id="acess-nav" href="#">
                  {" "}
                  Abre o Discord para seu navegador
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-2">
          <div className="box-7">
            <img src={disco} />
          </div>
          <div className="box-9">
            <img src={chip} />
          </div>
          <div className="box-10">
            <img src={caixa_mario} />
          </div>
          <div className="box-1">
            <img src={monitor} />
          </div>
          <div className="box-2">
            <img src={controle} />
          </div>
          <div className="box-3">
            <img src={notbook} />
          </div>
          <div className="box-4">
            <img src={iphone} />
          </div>
          <div className="box-6">
            <img src={potion} />
          </div>
          <div className="box-5">
            <img src={android} />
          </div>
          <div className="box-8">
            <img src={fone} />
          </div>
          <div className="box-11">
            <img src={bomb} />
          </div>
          <div className="box-12">
            <img src={coin} />
          </div>
        </div>
        <footer>
          <div className="container-4">
            <div className="box-6">
              <img src={logo_footer} />
            </div>

            <div className="box-1">
              <li id="first">Produto</li>
              <li>Baixar</li>
              <li>Marca</li>
              <li>Nitro</li>
            </div>

            <div className="box-2">
              <li id="first">Desenvolvedores</li>
              <li>Venda Seu jogo</li>
              <li>Rich Presence</li>
              <li>Verificação</li>
              <li>Aplicativos</li>
              <li>Documentação</li>
            </div>
            <div className="box-3">
              <li id="first">Recursos</li>
              <li>Venda Seu jogo</li>
              <li>Rich Presence</li>
              <li>Verificação</li>
              <li>Aplicativos</li>
              <li>Documentação</li>
            </div>
            <div className="box-2">
              <li id="first">Empresa</li>
              <li>Sobre</li>
              <li>Blog</li>
            </div>
            <div className="box-2">
              <li id="first">Mais</li>
              <li>Parceiros</li>
              <li>Hypsquad</li>
              <li>Lojinha</li>
              <li>Informações á empresa</li>
              <li>Código Aberto</li>
            </div>
          </div>
          <hr />
          <div className="second-footer">
            <h5>Pronto para testar o Discord? É grátis !</h5>
            <p>JUNTE-SE HOJE A MAIS DE 250 MILHÕES DE JOGADORES</p>
            <button>Registre-se agora</button>
          </div>
        </footer>
      </div>
    );
  }
}
