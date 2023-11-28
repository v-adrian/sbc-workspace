use std::io;

fn main() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    println!("Give me a string:");
    
    let mut string = String::new();

    io::stdin().read_line(&mut string);

    let mut vowels_count = 0;

    for character in string.to_lowercase().chars() {
        if vowels.contains(&character) {
            vowels_count += 1;
        }
    }

    println!("The number of vowels in the string are {}", vowels_count);
}
