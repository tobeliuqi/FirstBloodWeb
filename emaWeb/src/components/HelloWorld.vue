

<template>

  <div id="bg">
    <Form id="form" ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </div>

</template>
<script>
  export default {

    data () {

      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能低于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      beforeDestroy :function() {


      },
      handleSubmit: function (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {


            this.$http({
              method: 'GET',
              url: this.$url + '/gadget/api/hello.do'
            }).then(response => {
              window.localStorage.setItem("gadgetName", "hello,gadget")
              /*   document.getElementsByTagName("body").backgroundColor ="#f0f8ff"
                 document.getElementsByTagName("html").backgroundColor ="#f0f8ff"*/
              document.querySelector('body').removeAttribute('style');
              document.getElementsByName("body").backgroundColor ="#f0f8ff"
              this.$router.push('/theme');
              // location.reload()
            }).catch(err => {
              alert(err);
              console.log('请求失败');
            });

            this.$Message.success('Success!');

          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
<style>
  #form{
    width: 50%;
    height: 20%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }


</style>
<style >

  #bg {
    position:absolute;
    width:100%;
    height:100%;
    margin: 0;
    padding: 0;
    /* background-image: url("../assets/bg2.jpeg");*/
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  }
</style>


