import React, { useEffect, useState } from "react";
import "../Styles/fetch.css";
import alakazamImg from "../Images/alakazam.png";
import blastoiseImg from "../Images/blastoise.png";
import bulbasaurImg from "../Images/bulbasaur.png";
import charizardImg from "../Images/charizard.png";
import charmeleondImg from "../Images/charmeleon.png";
import charmanderdImg from "../Images/charmander.png";
import flareondImg from "../Images/flareon.png";
import gengarImg from "../Images/gengar.png";
import haunterImg from "../Images/haunter.png";
import pikachuImg from "../Images/pikachu.png";
import squirtleImg from "../Images/squirtle.png";
import vileplumeImg from "../Images/vileplume.png";
import wartortleImg from "../Images/wartortle.png";

export default function Fetch() {
  const pokesList = [
    "alakazam",
    "blastoise",
    "bulbasaur",
    "charizard",
    "charmeleon",
    "charmander",
    "flareon",
    "gengar",
    "haunter",
    "pikachu",
    "squirtle",
    "vileplume",
    "wartortle",
  ];

  const [selectedPokemon, setSelectedPokemon] = useState("charizard");
  const [pokeDados, setPokeDados] = useState({});

  const [pokeAbilTitle, setPokeAbilTitle] = useState("");
  const [pokeAbilDescript, setPokeAbilDescript] = useState("");

  useEffect(() => {
    if (!pokeDados[selectedPokemon]) getPokemonss();
  });
  function getPokemonss() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeDados({ ...pokeDados, [selectedPokemon]: data });
      });
  }

  function getImg(selectedPokemon) {
    switch (selectedPokemon) {
      case "alakazam":
        return alakazamImg;
      case "blastoise":
        return blastoiseImg;
      case "bulbasaur":
        return bulbasaurImg;
      case "charizard":
        return charizardImg;
      case "charmeleon":
        return charmeleondImg;
      case "charmander":
        return charmanderdImg;
      case "flareon":
        return flareondImg;
      case "gengar":
        return gengarImg;
      case "haunter":
        return haunterImg;
      case "pikachu":
        return pikachuImg;
      case "squirtle":
        return squirtleImg;
      case "vileplume":
        return vileplumeImg;
      case "wartortle":
        return wartortleImg;
      default:
        return "Error";
    }
  }

  function getType(feature) {
    switch (feature) {
      case "speed":
        return pokeDados[selectedPokemon]?.stats[0]?.base_stat;
      case "specialDefense":
        return pokeDados[selectedPokemon]?.stats[1]?.base_stat;
      case "specialAttack":
        return pokeDados[selectedPokemon]?.stats[2]?.base_stat;
      case "defense":
        return pokeDados[selectedPokemon]?.stats[3]?.base_stat;
      case "attack":
        return pokeDados[selectedPokemon]?.stats[4]?.base_stat;
      case "hp":
        return pokeDados[selectedPokemon]?.stats[5]?.base_stat;
      case "weight":
        return pokeDados[selectedPokemon]?.weight;
      case "height":
        return pokeDados[selectedPokemon]?.height;
      case "type":
        return pokeDados[selectedPokemon]?.types[
          pokeDados[selectedPokemon]?.types.length - 1
        ]?.type?.name;
      default:
        return;
    }
  }

  function getAvailabity(type) {
    const ability = pokeDados[selectedPokemon]?.abilities.find(
      (ability) =>
        (type === "Normal" && !ability.is_hidden) ||
        (type === "Hidden" && ability.is_hidden)
    );
    return ability?.ability?.name;
  }

  function getAvailabityDescUrl(type) {
    const ability = pokeDados[selectedPokemon]?.abilities.find(
      (ability) =>
        (type === "Normal" && !ability.is_hidden) ||
        (type === "Hidden" && ability.is_hidden)
    );
    return ability?.ability?.url;
  }

  function hiddenAbilityFunc(tipo) {
    setPokeAbilTitle(getAvailabity(tipo));

    fetch(`${getAvailabityDescUrl(tipo)}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeAbilDescript(
          data.effect_entries[0].effect ? data.effect_entries[0].effect : "Nop"
        );
      });
  }

  return (
    <div className="FetchContentor">
      <h1>Choose your Pokemon</h1>
      <section>
        <select
          value={selectedPokemon}
          onChange={(event) => setSelectedPokemon(event.target.value)}
        >
          {pokesList.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </section>

      <article className="container">
        <div className={getType("type")}>
          <img src={getImg(selectedPokemon)} title="Pokemon" alt="Pokemon" />
          <main>
            <h3 className="power">{getType("type")}</h3>
            <h2>{selectedPokemon}</h2>
            <ul>
              <li>
                <span>HP:</span> <span>{getType("hp")}</span>
              </li>
              <li>
                <span>Attack:</span> <span>{getType("attack")}</span>
              </li>
              <li>
                <span>Defense:</span> <span> {getType("defense")}</span>
              </li>
              <li>
                <span>Special Attack:</span>{" "}
                <span> {getType("specialAttack")}</span>
              </li>
              <li>
                <span>Special Defense: </span>{" "}
                <span> {getType("specialDefense")}</span>
              </li>
              <li>
                <span>Speed:</span> <span> {getType("speed")}</span>
              </li>
              <li>
                <span>Height:</span> <span>{getType("height")}</span>
              </li>
              <li>
                <span>Weight:</span> <span> {getType("weight")}</span>
              </li>
            </ul>
            <section>
              <article onClick={() => hiddenAbilityFunc("Normal")}>
                <h4>Abilidade</h4>
                <p>{getAvailabity("Normal")}</p>
              </article>
              <article onClick={() => hiddenAbilityFunc("Hidden")}>
                <h4>Hidden Ability</h4>
                <p>{getAvailabity("Hidden")}</p>
              </article>
            </section>
          </main>
        </div>
        <aside>
          <h2 className="AsideAbilTitle">{pokeAbilTitle}</h2>
          <p className="AsideAbilDescri">{pokeAbilDescript}</p>
        </aside>
      </article>
    </div>
  );
}
