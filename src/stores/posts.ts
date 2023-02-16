import { reactive, readonly } from "vue"

interface PostState {
    foo: string
}

export class PostsStore {
    #state: PostState

    constructor () {
        this.#state = reactive<PostState>({
            foo: 'foo'
        }) 
    }

    getState () {
        return readonly(this.#state)
    }

    updateFoo (foo: string) {
        this.#state.foo = foo
    }
}

const store = new PostsStore()

export function usePosts () {
    return store
}