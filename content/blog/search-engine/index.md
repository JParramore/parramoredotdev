---
title: Search Engine for Technical Blogs 🔍
date: "2020-10-29T22:12:03.284Z"
description: "A search engine for technical blogs!"
github: "https://github.com/JParramore/search-engine"
live: "https://www.parramore.dev/search"
blog: false
---

This project allows users to search technical blogs! Built with Python, React, HTML, CSS, and SQLite.

<br>

There are three core modules:

- `crawler.py` — a web crawler that utilizes the `requests` module to crawl entire websites from a seed file in `db/seed.yaml`

- `indexer.py` — an indexer which exports functionality to store websites in an SQLite database with efficient indexing

- `query.py` — a query module which, given a search term, retrieves and ranks websites by three heuristics (frequency, location, distance)


<br>

A Flask application in `server.py` serves a React application that allows users to interact with the project.

<br>