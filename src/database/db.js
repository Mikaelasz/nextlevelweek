//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dado
module.exports = db

/*    db.serialize( () => {
    //criar tabela
     db.run(`
        create table if not exists places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
        `)
    //inserir dados na tabela
    const query = `
    insert into places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) values (?,?,?,?,?,?,?);
`
    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria", 
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rua do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]    
       function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this) 
    } 
 
      db.run(query, values, afterInsertData)
        //consultar dados da tabela
            db.all(`select * from places`, function(err, rows){
            if(err){
                return console.log(err)
            }
            console.log("Aqui estão seus registros: ")
            console.log(rows)
        })     
         
        //deletar um dado da tabela 
             db.run(`Delete from places where id = ?`, [11], function(err){
            if(err){
                return console.log(err)
            }
            console.log("Registro deletado com sucesso!!")
        } )    
          

})    */
    
