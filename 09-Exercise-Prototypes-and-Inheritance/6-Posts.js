
//6. Posts

// 100/100

function solution() {

  class Post {
    constructor(title, content){
      this.title = title;
      this.content = content;
    }

    toString(){
      return `Post: ${this.title}` + '\n' + `Content: ${this.content}`;
    }
  };




  class SocialMediaPost extends Post {
      constructor(title, content, likes, dislikes){
        super(title, content);
        this.likes = Number(likes);
        this.dislikes = Number(dislikes);
        this.comments = [];
      }

      //addComment(comment)- a function, which adds comments to that array
      addComment(comment){
        this.comments.push(comment);
      }

      // The class should extend the toString() function of the Post class, and should return the
      // following result:
      // "Post: {postTitle}"
      // "Content: {postContent}"
      // "Rating: {postLikes - postDislikes}"
      // "Comments:"
      // " * {comment1}"
      // " * {comment2}"

      toString(){
        if (this.comments.length > 0) { // whe have comments !== 0
          let printDataResult = 
            super.toString() + // call --> class Post --> toString() logic --> // "Post: {postTitle}"   // "Content: {postContent}"
            "\n" + `Rating: ${this.likes - this.dislikes}` +  "\n";

            printDataResult += "Comments:";

            for (let comment of this.comments) {
              printDataResult += "\n" + ` * ${comment}`;
            }

            return printDataResult;
        }


        // if no comments logic print only rating
// * In case there are no comments, return information only about the title, content, and rating of the post.
        return super.toString() + "\n" + `Rating: ${this.likes - this.dislikes}`;
      };

    }



          class BlogPost extends Post {
            constructor(title, content, views) {
              super(title, content);
              this._views = Number(views);
            }


        // * view() - which increments the views of the object with 1, every time it is called. 
        // The function should return the object so that chaining is supported. 
            view() {
              this._views++;
              return this;
            }

            get(){
              return this._views;
            }

            // o The BlogPost class should extend the toString() function of the Post class, and should
            // return the following result:
            // "Post: {postTitle}"
            // "Content: {postContent}"
            // "Views: {postViews}"
              toString() {
              return super.toString() + "\n" + `Views: ${this._views}`;
            }
          }


  return {Post, SocialMediaPost, BlogPost};
}




//tests: ----------
const classes = solution();
const post = new classes.Post("Post", "Content");
console.log(post.toString());
// Post: Post
// Content: Content

const scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!



//******************************************************************************************* */


class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class AbstractPerson {
    constructor(name) {
      if (new.target === AbstractPerson) {
        throw new Error("This is an abstract class and cannot be instanciated");
      }
  
      this.name = name;
    }
  }
  
  const ivanPerson = new Person("Ivan");
  // const ivanAbstractPerson = new AbstractPerson("Ivan");