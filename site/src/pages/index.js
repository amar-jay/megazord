"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Home = function () {
    return (<div className="page">
      <head_1["default"]>
        <title>Komrade Roadmap</title>
        <meta name="description" content="The Roadmap to building komrade the hub for enterpreneurs"/>
        <link rel="icon" href="/favicon.ico"/>
      </head_1["default"]>

      <main className="main">
        <h1 className="title">Komrade</h1>
        <ul className="todo-list">
          <li className="list-item">Create A roadmap</li>
          <li className="list-item">Make a business plan</li>
          <li className="list-item">
            Write series of articles about what we do
          </li>
          <li className="list-item">Make UI Designs</li>
          <li className="list-item text-secondary-washed-out list-none">...</li>
        </ul>
      </main>

      <footer className="footer">The RoadMap from 2/9/2020 - 1/1/2024</footer>
    </div>);
};
exports["default"] = Home;
