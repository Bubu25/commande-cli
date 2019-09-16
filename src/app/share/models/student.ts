export class Student {
    /**
     * Id of a student. null or number
     */
    private id:number;


    /**
     * status of a student. String or null
     */
    private status:number;

    /**
     * name of a student.string
     */
    private nom:string;

    /**
     * firstname of a Student. String
     */
    private prenom:string;

    /**
     * adress of a student. String or null
     */
    private adresse:string;


    /**
     * telephone of a student. String or null
     */
    private telephone:string;


    /**
     * telephone of a student. String or null
     */
    private commande:string;

    /**
     * id of the class of a Student. Default  1
    
    **/

    public setId(id:number): Student{
        this.id =id;
        return this;
    }

    /**
     * Set the status of this Student
     */
    public setStatus(status:number): Student{
        this.status=status;
        return this;
    }

    /**
     * Set the name of this Student
     * @param nom Name of this Student
     * @return Student to chain invoke methods
     */
    public setNom(nom:string):Student{
        this.nom = nom;
        return this;
    }
     /**
     * Set the prenom of this Student
     * @param prenom Firstname of this Student
     * @return Student 
     */
    public setPrenom(prenom:string):Student{
        this.prenom = prenom;
        return this;
    }
    /**
     * Set the  adress of this Student
     * @param adresse Adress of this Student
     * @return Student 
     */
    public setAdresse(adresse:string):Student{
        this.adresse = adresse;
        return this;
    }

    /**
     * Set the phone of this Student
     * @param telephone Adress of this Student
     * @return Student 
     */
    public setTelephone(telephone:string):Student{
        this.telephone = telephone;
        return this;
    }

    /**
     * Set the commande of this Student
     * @param commande Adress of this Student
     * @return Student 
     */
    public setCommande(commande:string):Student{
        this.commande = commande;
        return this;
    }

    /**
     * return the name of the Student
     */
    public getNom():string{
        return this.nom;
    }

    /**
     * return the prenom of the Student
     * @return string
     */
    public getPrenom():string{
        return this.prenom;

    }

    /**
     * return the adress of the Student
     * @retun string
     */
    public getAdresse():string{
        return this.adresse;
    }

    /**
     * return the phone of the Student
     * @retun string
     */
    public getTelephone():string{
        return this.telephone;
    }

    
    /**
     * return the command of the Student
     * @retun string
     */
    public getCommande():string{
        return this.commande;
    }

    /**
     * return the status of the Student
     * @return number
     */
    public getStatus():number{
        return this.status;

    /**
     * return the id of the Student
     * @return number
     */
    }
    public getId():number{
        return this.id;
    }
}
