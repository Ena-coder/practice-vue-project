<template>
  <div class="about">
    <h2>about</h2>
    <van-button type="primary" @click="changeStyle">更改样式</van-button>
    <div v-if="!iscolum" class="flex-row" >
      <van-image v-for="img in imgList" :key="index" width="60" height="60" radius="10"  lazy-load fit="cover" :src="img" />
    </div>
    <div v-else="iscolum" class="flex-column">
      <van-image v-for="img in imgList" :key="index" width="60" height="60" radius="10"  lazy-load fit="cover" :src="img" />
    </div>
      
  </div>
</template>
<script>
export default {
  name:"About",
  data(){
    return {
      iscolum: false,
      imgList: [
        'https://hbimg.huabanimg.com/268197c93ade11a04336e45f4a74639c660cb00795b3-MEc7aM_fw658/format/webp',
        'https://hbimg.huabanimg.com/f0c92ffc89fb2b6e72c5e83ad2fa8ccd41e5b3addb72-nHBVe5_fw658/format/webp',
        'https://hbimg.huabanimg.com/f6b823f82b1749ef480f776d72de122fce5237a882f0-LGec9t_fw658/format/webp',
        'https://hbimg.huabanimg.com/de11d1fbb5071356d94a812925730e878a0e04997a7562-vJBWTX_fw658/format/webp',
        'https://hbimg.huabanimg.com/9d05a0ac1da49862f6abb4f5667208f87b430ca9615b6-1vxm04_fw658/format/webp',
        'https://hbimg.huabanimg.com/15f2f2102113c96c8dd14030323e8755cb358c59bf4c-iM7zoQ_fw658/format/webp'
      ]
    }
  },
  methods: {
    changeStyle(){
      this.iscolum = !this.iscolum
    }
  }
}
</script>
<style scoped>
  .flex-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
  }
  .van-image{
    margin: 10px;
  }
</style>
