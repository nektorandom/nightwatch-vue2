module.exports = {
    'Gigant auth page': function(brower) {
        brower
            .url('https://gigant2.demo.code-pilots.ru/login')
            .waitForElementVisible('body')
            .assert.visible('input[name=login]')
            .setValue('input[name=login]', 'userName')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]').pause(10)
            // .findElement(By.xpath("//span[@class='cp-error-message']")) ???
            // .assert.containsText('.cp-error-message', 'заполено') // тут где то ошибка, нужно гуглить. И у нас сейчас там запоЛЕНО?? :)
            .end();

        // brower
        //     .url('https://gigant2.demo.code-pilots.ru/login')
        //     .expect.element('.cp-error-message').text.to.be("заполено");
    }
};
