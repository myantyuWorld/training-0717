/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * カテゴリ一覧API
         * @description カテゴリをデフォルトで全件取得して返却します <br>
         *     idの昇順。
         *
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: components["responses"]["GetCategories"];
                500: components["responses"]["InternalServerError"];
            };
        };
        put?: never;
        /**
         * カテゴリ登録API
         * @description カテゴリを登録します!
         *
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * カテゴリ更新API
         * @description カテゴリを更新します
         *
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    categoryId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        /**
         * カテゴリ削除API
         * @description カテゴリを削除します
         *
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    categoryId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * TODO取得API
         * @description TODO一覧を取得して返却します<br/>
         *
         */
        get: {
            parameters: {
                query?: {
                    offset?: number;
                    limit?: number;
                    status?: "DONE" | "TODO";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: components["responses"]["GetTodoList"];
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        /**
         * TODO登録API
         * @description TODOを登録します<br/>
         *     デフォルトで、`done(タスク状態)`をfalseにします
         *
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        categoryId?: number;
                        /** Format: date */
                        dueDate?: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/todo/{todoId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * TODO詳細API
         * @description TODOを１つ取得します
         *
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    todoId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: components["responses"]["GetTodo"];
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /**
         * TODO更新API
         * @description TODOの情報を更新します<br/>
         *     更新できる情報として以下があります<br/>
         *     - カテゴリ
         *     - TODOの名称
         *     - 期限
         *
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    todoId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        categoryId?: number;
                        /** Format: date */
                        dueDate?: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        /**
         * TODO論理削除API
         * @description TODOを論理削除（doneの値を切り替える）します
         *
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    todoId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Authorization information is missing or invalid. */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Unexpected error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Category: {
            id?: number;
            name?: string;
        };
        Todo: {
            id?: number;
            name?: string;
            category?: components["schemas"]["Category"];
            /**
             * Format: date
             * @example 1990-01-01
             */
            dueDate?: string;
            done?: boolean;
        };
        UserBase: {
            id: string;
            name: string;
            address: string;
            /**
             * Format: date
             * @example 1909-01-01
             */
            birthday: string | null;
            age: number | null;
            /** @enum {string} */
            sex: "MALE" | "FEMALE";
            memberType: components["schemas"]["MemberType"];
        };
        User: components["schemas"]["UserBase"] & {
            /** @example 09012345678 */
            phoneNumber: string;
            /** @example sample@example.com */
            email: string | null;
        };
        /** @enum {string|null} */
        MemberType: "GENERAL" | "SPECIAL" | "CHILD" | "SENIOR" | null;
        /** @enum {string} */
        Trigger: "HP" | "INTRODUCTION" | "TVCM" | "HOTPEPPER" | "FLYER" | "NONE";
        GeneralError: {
            /**
             * Format: int
             * @example エラーカテゴリ/エラータイプ
             */
            code?: string;
        };
    };
    responses: {
        /** @description successful operation */
        GetTodoList: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Todo"][];
            };
        };
        /** @description successful operation */
        GetTodo: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Todo"];
            };
        };
        /** @description successful operation */
        GetCategories: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Category"][];
            };
        };
        /** @description successful operation */
        GetUsers: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["UserBase"][];
            };
        };
        /** @description Successful operation */
        GetUser: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["User"];
            };
        };
        /** @description Not found. */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["GeneralError"];
            };
        };
        /** @description Illegal input for operation. */
        IllegalInput: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["GeneralError"];
            };
        };
        /** @description Internal Server Error */
        InternalServerError: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["GeneralError"];
            };
        };
    };
    parameters: {
        /** @description ユーザーID */
        UserId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
