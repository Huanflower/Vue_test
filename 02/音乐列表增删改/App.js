export default {
    template: `
        <div>
            <list :musics="appmusics"></list>
            <add :musics="appmusics"></add>
            <del-vue :musics="appmusics"></del-vue>
            <update :musics="appmusics"></update>
        </div>
    `,
    data(){
        return {
            appmusics: [{ id: 1, name: '董小姐' }, { id: 2, name: '我会在你身边' }, { id: 3, name: '疯人愿' }, { id: 4, name: '告白气球' }]
        }
    }
}