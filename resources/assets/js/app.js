var Constants = {
  defaultUrl:'urls/10'
}


new Vue({
    el: '#app',
    data: {
        formData: {
            long_url: "",
            custom_key: "",
            category: ""
        },
        categories: [],
        urls: [],
        urlData: {},
        urlFilterData: {
            category: "",
            search: "",
            desc: "",
            asc: "",
            sort: "",
            sortName: "Time Increasing",
            del: false // It take the previous value of checkbox, so inverse this for taking real effect
        }
    },

    methods:{
        deleteUrl: function(id){
            this.$http.get('/url/'+id+'/delete').then(function(res){
                window.location.href="/";
            });
        },
        showDeleted: function(){
            this.urlFilterData.del = !this.urlFilterData.del;
            this.getUrls();
        },
        setUrlSorting: function(sort, type, name){
            if(type == 'desc'){
                this.urlFilterData.desc = 1;
                this.urlFilterData.asc = 0;
            }else if(type == 'asc'){
                this.urlFilterData.asc = 1;
                this.urlFilterData.desc = 0;
            }
            this.urlFilterData.sort = sort;
            this.urlFilterData.sortName = name;
            //console.log(JSON.stringify(this.urlFilterData));

            this.getUrls();
        },
        createUrl: function(e){
            console.log(JSON.stringify(this.formData));
            this.$http.post('url', this.formData).then(function(data){
                    console.log(data.data.data);
            });
            window.location.href="/";
            return false;
        },
        searchUrl: function(){
            this.getUrls();
        },
        setFormCategory: function(category){
            this.formData.category = category;
        },
        setUrlFilterCategory: function(category){
            this.urlFilterData.category = category;
            this.getUrls();
        },
        getCategoryList: function(){
            this.$http.get('/urls/categories').then(function(res){
                this.categories = (res.data.data);
            });
        },
        getUrls: function(urlLink = Constants.defaultUrl){
            var query = [];
            var a = '';
            if(urlLink.indexOf('?') >= 0){
                a = '&';
            }else{
                a = '?';
            }
            if(this.urlFilterData.category){
                query.push('category='+this.urlFilterData.category);
            }
            if(this.urlFilterData.search){
                query.push('search='+this.urlFilterData.search);
            }
            if(this.urlFilterData.sort){
                query.push('sort='+this.urlFilterData.sort);
            }
            if(this.urlFilterData.desc){
                query.push('desc=1');
            }
            if(this.urlFilterData.asc){
                query.push('asc=1');
            }
            if(this.urlFilterData.del){
                query.push('del=1');
            }
            query = a+query.join('&');
            this.$http.get(urlLink+query).then(function(res){
                this.urls = res.data.data.data;
                delete(res.data.data["data"]);
                this.urlData = res.data.data;
            });
        },
        nextPage: function(){
            this.getUrls(this.urlData.next_page_url);
        },
        prevPage: function(){
            this.getUrls(this.urlData.prev_page_url);
        }
    },
    created: function(){
        this.getCategoryList();
        this.getUrls();
    }

})
