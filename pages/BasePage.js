export class BasePage
{

    constructor(page)
    {
        this.page=page
    }
   
     async waitForNewPage(context,triggerFn)
    {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            triggerFn()
        ]);
        
        
        return newPage;
    }

    async acceptAlert(action,alerttext='')
    {
        this.page.on('dialog',async (dialog)=>
        {
            if(action == "accept")
            {
                await dialog.accept(alerttext)
            }
            else
            {
                await dialog.dismiss()
            }
            
        })

    }



}