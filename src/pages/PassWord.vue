<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>

          <v-text-field
            v-model="password"
            :append-icon="show1?'visibility':'visibility_off'"
            :rules="[rules.required,rules.min]"
            :type="show1?'text' : 'password'"
            label="请输入密码"
            @click:append="show1=!show1">
          </v-text-field>

        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data(){
      return{
        show1:false,
        password:'',
        rules:{
          required: value => !!value || '必填',
          min: v => v.length >= 8 || '最少8个字符'
        }
      }
  }
  }
</script>
