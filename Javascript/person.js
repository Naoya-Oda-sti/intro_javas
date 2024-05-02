class Person {
    name;
    birth;
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
    getAge() {
        const now = new Date();
        let age = now.getFullYear() - this.birth.getFullYear();

        // 誕生日がまだか確認
        const thisBirth = new Date(
            now.getFullYear(),
            this.birth.getMonth(),
            this.birth.getDate()
        );
        // まだなら-1
        if (now < thisBirth) {
            age--;
        }

        return age;
    }
}
