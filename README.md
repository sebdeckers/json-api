# Express Exercise: JSON API

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
