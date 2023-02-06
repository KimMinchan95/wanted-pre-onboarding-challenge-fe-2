{
    /**
     * 할일
     * @typedef {Object} Todo - 할 일
     * @property {number} id - 아이디
     * @property {string} content - 내용
     * @property {boolean} complete - 완료여부
     * @property {string} category - 카테고리
     * @property {string[]} [tags] - 태그들
     */
    interface Todo {
        id: number;
        content: string;
        complete: boolean;
        category: string;
        tags: string[];
    }

    /**
     * 1. 할 일을 추가할 수 있다.
     * 2. 내용없이 추가할 수 없다.
     * @funtion
     * @param {string} content - TODO에 추가할 내용
     * @param {string} [category] - 새로 추가하는 할 일의 카테고리
     * @param {string[]} [tags] - 새로 추가하는 할 일의 태그 목록
     * @return {void}
     */
    const Create = (content: string, category: string, tags: string[]): void => {}

    /**
     * 1. 모든 할 일을 조회할 수 있다.
     * 2. ID를 기반으로 특정 할 일을 조회할 수 있다.
     * @function
     * @param {number} [id] - 있으면 특정 할 일 조회, 없으면 전제 조회
     * @return {Todo[]} - Todo 목록을 반환한다.
     */
    const Read = (id: number): Todo[] => { }

    /**
     * 1. ID를 제외한 모든 속성을 수정할 수 있다.
     * 2. 특정 할일의 특정 태그를 수정할 수 있다.
     * @function
     * @param {Todo} todo - 수정할 할일
     * @return {void}
     */
    const Update = (todo: Todo): void => { }

    /**
     * 1. ID를 기반으로 특정 할 일을 삭제할 수 있다.
     * 2. 모든 할 일을 제거할 수 있다.
     * 3. 특정 할 일의 특정 태그를 삭제할 수 있다.
     * 4. 특정 할 일의 모든 태그를 제거할 수 있다.
     * @function
     * @param {string} [id] - 있으면 특정 할 일 삭제, 없으면 전체 삭제
     * @param {string[]} [tags] - 삭제하고 싶은 태그 목록
     * @return {Todo[]} - Todo 목록을 반환한다.
     */
    const Delete = (id: string, tags: string[]): Todo[] => { }
}