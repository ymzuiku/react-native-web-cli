export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'
if(isDev){
  console.log("正处于开发模式：process.env.NODE_ENV === 'development'")
}
