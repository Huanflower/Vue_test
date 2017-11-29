export default {
    template: `
        <div style = "background-color: pink;">
            <ul>
                <li v-for="(music,index) in musics" :key="index">
                {{music.id}}  {{music.name}}
                </li>
            </ul>
        </div>
    `,
    props: ['musics']
}