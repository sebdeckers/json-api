# Express Exercise: JSON API

[![Travis CI](https://img.shields.io/travis/cbas/json-api.svg)](https://travis-ci.org/cbas/json-api)
[![Codeship](https://img.shields.io/codeship/638b33e0-7958-0133-8d22-2292869b3ab0.svg)](https://codeship.com/projects/118699)

## Specification

- Server

  - should respond with JSON data

    ```
    /
    ```

  - should provide a list of all class participants

    ```
    /participants
    ```

  - should allow searching by name

    ```
    /participants?byName
    ```

  - should allow sorting alphabetically by name

    ```
    /participants?byName&sorted
    ```

  - should allow whitelisting specific fields

    ```
    /participants?byName&sorted&only=name
    ```
