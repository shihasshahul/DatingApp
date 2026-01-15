using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    public required string DisplayName { get; set; } 
    [EmailAddress]
    public  required string Email { get; set; } 
    [MinLength(4)]
    public required string Password { get; set; } 
}
