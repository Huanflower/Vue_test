export default {
    template: `
        <div style="background-color: yellow;">
            ID:<input type="text" v-model="delId" />
            <button @click = "delmusic">删除</button>
        </div>
    `,
    props: ['musics'],
    data() {
        return {
            delId: '',
        }
    }, methods: {
        delmusic() {
            var index = this.musics.findIndex(ele => ele.id == this.delId);
            if (index == -1) return alert('该音乐不存在');
              
            //删除英雄
           this.musics.splice(index,1);
        }
    }
}