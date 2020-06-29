import { Contact } from '../model/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export const contactForm = (contact: Contact): FormGroup => {
    const fb = new FormBuilder();
    const fg: FormGroup = fb.group({
        _id: [contact?._id || ''],
        index: [contact?.index || ''],
        firstName: [contact?.firstName || '', Validators.required],
        lastName: [contact?.lastName || '', Validators.required],
        company: [contact?.company || '', Validators.required],
        email: [contact?.email || '', [Validators.required, Validators.email]],
        phone: [contact?.phone || '', Validators.required],
        address: [contact?.address || '', Validators.required],
    });
    return fg;
}