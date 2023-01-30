let menus = [
    {   //Popular
        'name': ['Pizza Salami', 'Currywurst', 'Nizza Salat'],
        'price': [8.90, 4.90, 8.90],
        'description': ['Normal, Ø 25cm', '', 'mit Thunfisch']
    },
    {   //forKids
        'name': ['Kinder Teller', 'Kinder Currywurst', 'Kinder Pizza'],
        'price': [8.90, 4.90, 8.90],
        'description': ['Kleine Portion Pommes mit kleinem Schnitzel', 'mit Pommes', 'Normal, Ø 18cm']
    },
    {   //Salads
        'name': ['Gemischter Salat', 'Rustika Salat', 'Nizza Salat', 'American Salat', 'Chef Salat', 'Caesar Salat'],
        'price': [7.90, 8.90, 8.90, 8.90, 8.90, 8.90],
        'description': ['mit frischem Eisbergsalat, Cherrytomaten, Zwiebeln, Oliven, Gurken, Mais und Paprika', 'mit Hirtenkäse', 'mit Thunfisch', 'mit gebratenem Hähnchenbrustfilet', 'mit Hinterschinken und Ei', 'mit Croutons und Parmesan']
    },
    {   //Pizza
        'name': ['Pizza Salami', 'Pizza Tonno', 'Pizza Margherita', 'Pizza Funghi', 'Pizza Hawaii', 'Pizza Tomato'],
        'price': [8.90, 9.90, 8.90, 9.90, 10.20, 9.90],
        'description': ['Normal, Ø 25cm', 'Normal, Ø 25cm', 'Normal, Ø 25cm', 'Normal, Ø 25cm', 'Normal, Ø 25cm', 'Normal, Ø 25cm']
    },
    {   //Pasta
        'name': ['Pasta Roma', 'Pasta Mexico (scharf)', 'Pasta Bolognese', 'Pasta Al Forno', 'Pasta Chicken', 'Pasta Hot Chili'],
        'price': [10.90, 9.90, 8.90, 9.90, 10.20, 9.90],
        'description': ['mit Hinterschinken in Sahnesauce', 'mit Jalapenos und Mais in Tomaten-Sahnesauce', 'mit Rinderhackfleisch in Tomatensauce', 'mit Schinken und frischen Champignons in Tomaten-Sahnesauce', 'mit Hähnchenbrust, Möhren, Rucola, Cherrytomaten und Grana Padano in Pesto-Sahnesauce, ohne Käse überbacken', 'mit gebratener Hähnchenbrust in Rahmsauce']
    },
    {   //Burger
        'name': ['Hamburger', 'Cheeseburger', 'Bacon Burger', 'Burger Hot Chili', 'Crunchy Chicken Burger'],
        'price': [7.90, 8.90, 8.90, 9.90, 10.20],
        'description': ['', '', '', '', '', '']
    },
    {   //Cutlets
        'name': ['Schnitzel Wiener Art', 'Schnitzel', 'Schnitzel Hollandaise'],
        'price': [10.90, 12.90, 12.90],
        'description': ['', 'mit Jägersauce', 'mit Broccoli und Sauce Hollandaise in Sahnesauce']
    },
    {   //casseroles
        'name': ['Lasagne', 'Broccoli Auflauf', 'Gyros Auflauf', 'Hotchili Auflauf'],
        'price': [10.90, 10.90, 11.90, 14.90],
        'description': ['mit gemischtem Hackfleisch und geschichteten Nudeln in Tomaten-Hackfleischsauce', 'mit Kartoffeln und Broccoli in Sahnesauce', 'mit Gyros, Zwiebeln und Champignons in Sahnesauce', 'Mit Currychekin, Jalapeños,Champions, Brokkoli, Kartoffeln und Sahne Sauce']
    },
    {   //pizzaRolls
        'name': ['Gefüllte Pizza Roll Gouda', 'Gefüllte Pizza Roll Pute', 'Gefüllte Pizza Roll Salami', 'Gefüllte Pizza Roll Schinken', 'Gefüllte Pizza Roll Meat', 'Gefüllte Pizza Roll Sucuk'],
        'price': [6.90, 6.90, 6.90, 6.90, 7.20, 6.90],
        'description': ['', '', '', '', 'mit Salami und Schinken', '']
    },
    {   //pizzaBuns
        'name': ['Pizzabrötchen (6 Stück)', 'Käse Ecken', 'Feuer Ring'],
        'price': [4.20, 4.90, 13.90],
        'description': ['mit Knoblauch-Dip', 'mit Knoblauch-Dip', 'gerollter Teig mit Rinderhackfleisch, Mais, Jalapenos, Sauce Hollandaise und Käse']
    },
    {   //croques
        'name': ['Croque Antonio', 'Croque Hot Chili', 'Croque Monsiuer', 'Croque Avginon', 'Croque Nizza', 'Croque Hawaii'],
        'price': [9.50, 9.90, 9.50, 9.50, 9.50, 9.50],
        'description': ['mit Putenfleisch und Tomaten', 'mit Sucuk, Hähnchenbrust und Jalapenos', 'mit Hinterschinken und Tomaten', 'mit Salami und Tomaten', 'mit Thunfisch und Zwiebeln', 'mit Hinterschinken und Ananas']
    },
    {   //fingerfood
        'name': ['Pommes frites', 'Currywurst', 'Mozzarella Sticks (3 Stück)', 'Chicken Nuggets (6 Stück)', 'Knoblauchbrot (ca. 30cm)', 'Chicken Wings (6 Stück)'],
        'price': [3.90, 6.90, 3.30, 4.40, 2.20, 4.90],
        'description': ['', '', '', '', '', '']
    },
    {   //desserts
        'name': ['XL Choco Muffin', 'Tiramisu (90ml)'],
        'price': [2.80, 2.80],
        'description': ['', 'italienische Spezialität mit Alkohol']
    },
    {   //toDrink
        'name': ['Coca-Cola 1,0l (MEHRWEG)', 'Coca-Cola light taste 1,0l (MEHRWEG)', 'Fanta Orange 1,0l (MEHRWEG)', 'Mezzo Mix 1,0l (MEHRWEG)', 'Sprite 1,0l (MEHRWEG)', 'Lift Apfelschorle 1,0l (MEHRWEG)'],
        'price': [3.05, 3.05, 3.05, 3.05, 3.05, 3.05],
        'description': ['', '', '', '', '', '']
    },
    
];
