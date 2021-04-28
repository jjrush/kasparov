import { navigate } from "@reach/router";
import React from "react";

const MatchFinder = (props) => {
    const { loggedIn, userId, userName } = props;

    const handleFindMatch = () => {
        // send userId to server

        navigate('/match')
    }

    return (
        <div>
            <h2>Find a match!</h2>
            <button class="pure-button pure-button-primary" onClick={handleFindMatch}>Find match</button>
        </div>
    );
};

export default MatchFinder;