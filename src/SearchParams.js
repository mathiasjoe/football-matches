import { useState, useEffect } from "react";

const COMPETITIONS = ["WC","CL","BL1","DED","BSA","PD","FL1","ELC","PPL","EC","SA","PL","CLI"]
const SearchParams = () => {

    const [competition, setCompetition] = useState("");
    const [date, setDate] = useState("");
    const date = [];

    useEffect(() => {
        requestMatches();
    })

    async function requestMatches(){
        const res = await fetch(
            `API LINK til matches pr dag, competition=${competition}%date=${date}`
        )
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="competitions">
                    Competition
                    <select id="competition" 
                    value={competition}
                    onChange={e => setCompetition(e.target.value)}
                    onBlur={e => setCompetition(e.target.value)}>
                    <option />
                    {
                        COMPETITIONS.map( competition =>(
                            <option value={competition} key={competition}>
                                {competition}
                            </option>
                        ))
                    }
                    </select>
                </label>
                <label htmlFor="date">
                    Date
                    <select id="date" 
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    onBlur={e => setDate(e.target.value)}>
                    <option />
                    {
                        dates.map( date =>(
                            <option value={date} key={date}>
                                {date}
                            </option>
                        ))
                    }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;
