import React from "react";

const Pokeinfo = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="types">
                        <h3>Types:</h3>
                        {
                            data.types.map(type=>{
                                return (
                                    <>
                                        <p>{type.type.name}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="weight">
                        <h3>Weight:
                            <p> {data.weight}</p>
                        </h3>
                    </div>
                    <div className="height">
                        <h3>Height:
                            <p> {data.height}</p>
                        </h3>
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h6>
                                            <p>stats {poke.stat.name}:{poke.base_stat}</p>
                                        </h6>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="moves">
                        <h2>Moves:</h2>
                        {
                            data.moves.map(move=>{
                                return (
                                    <>
                                        <p>{move.move.name}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                    
                </>
            )
        }

        </>
    )
}
export default Pokeinfo